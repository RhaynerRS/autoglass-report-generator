import React from 'react';
import './index.css'

const imgRegEx = /(?:png|jpe?g|gif)$/i;
const protocolRegEx = /^(?:(?:https?|ftp):\/\/)/i;
const urlRegEx = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/; // eslint-disable-line
const base64ImgRegEx = /^data:image\/([a-zA-Z0-9-_.])+;base64,([^"]*)$/i;

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

export function TestContext(props) {
    console.log(props)
    let ctx = JSON.parse(props.context)
    function renderImage(ctx, title) {
        const isUrl = urlRegEx.test(ctx);
        const hasProtocol = protocolRegEx.test(ctx);
        const linkUrl = isUrl && !hasProtocol ? `http://${ctx}` : ctx;
        return (
            <a
                class="image-link"
                href={linkUrl}
            >
                <img src={linkUrl} class="image" alt={title} />
            </a>
        )
    }
    function renderBase64Image (ctx, title) {
        return <img src={ctx} class="image" alt={title} />
    };
    function renderLink(url, title) {
        const linkUrl = `${protocolRegEx.test(url) ? '' : 'http://'}${url}`;
        return (
            <a
                class="text-link"
                href={linkUrl}
                alt={title}
            >
                {url}
            </a>
        )
    }
    function renderContextContent(content, title) {
        // Images
        if (imgRegEx.test(content)) {
            return renderImage(content, title);
        }

        // Base64 Images
        if (base64ImgRegEx.test(content)) {
            return renderBase64Image(content, title);
        }

        // URLs
        if (urlRegEx.test(content)) {
            return renderLink(content, title);
        }

        // Simple string
        if (isString(content)) {
            return (
                <code>
                    {content}
                </code>
            );
        }

        // All other types (primitives, objects, arrays...)
        const code = JSON.stringify(content, null, 2);
        return (
            <code>
                    {code}
            </code>
        );
    }

    function renderContext(ctx) {
        if (isString(ctx)) {
            return <div class="context-item" >{renderContextContent(ctx)}</div>;
        }

        const { title, value } = ctx;
        return (
            <div class="context-item" >
                <h4 class='context-item-title' >{title}:</h4>
                {renderContextContent(value, title, true)}
            </div>
        );
    }

    if (ctx!=null){
        return (
            <div class="context">
                <h4 class="context-title" >Additional Test Context</h4>
                {Array.isArray(ctx)
                    ? ctx.map(renderContext)
                    : renderContext(ctx)}
            </div>
        );
    }
    else{
        return null
    }
}