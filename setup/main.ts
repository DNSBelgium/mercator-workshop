import { defineAppSetup } from '@slidev/types'

function enableCopy(selector = "pre", childSelector = "code", btnText = "Copy", btnTextSuccess = "Copied", activeClass = "--copy") {
    console.log("COUCOU")
    document.querySelectorAll(`${selector}:not(.${activeClass})`).forEach(node => {
        // create a "copy" button
        let copyBtn = document.createElement("button");
        copyBtn.classList.add("ctc-button")
        copyBtn.innerText = btnText;
        // activeClass acts as flag so we don't add another copy button by mistake
        node.classList.add(activeClass);
        node.appendChild(copyBtn);
        copyBtn.addEventListener("click", async () => {
            // copy to clipboard
            if (navigator.clipboard) {
                let text = node.querySelector(childSelector).innerText;
                await navigator.clipboard.writeText(text);
            }
            // change text of button after copying
            copyBtn.innerText = btnTextSuccess;
            // change text back to normal after ### ms
            setTimeout(() => copyBtn.innerText = btnText, 2000);
        })
    })
}

const CopyPlugin = {
    // run this method when plugin installs
    install: function (Vue) {

        // create a Vue mixin
        Vue.mixin({
            // on each mounted lifecycle hook, run this code
            mounted: function () {
                // same function we used above
                enableCopy("pre.slidev-code");
            }
        })
    }
}

export default defineAppSetup(({ app, router }) => {
    app.use(CopyPlugin)
})