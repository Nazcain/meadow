import lightGallery from "lightgallery"

export function setupFootnotes() {
  const footnoteLinks = document.querySelectorAll("[data-footnote-ref]")
  const footerFootnotes = document.querySelector("[data-footnotes]")

  footnoteLinks.forEach((link) => {
    const parent = link.closest("p, ul, ol")
    const contentEl = document.querySelector(`${link.getAttribute("href")}`)
    if (!contentEl) {
      return
    }
    const container = document.createElement("div")
    const sidenote = document.createElement("div")
    const label = link.textContent
    const isLeft = link.id.includes("left")
    container.classList.add("sidenote-container")
    sidenote.classList.add("sidenote")
    if (isLeft) {
      sidenote.classList.add("-left")
    }
    sidenote.innerHTML = contentEl.innerHTML
    sidenote.dataset.label = label
    sidenote.querySelector("[data-footnote-backref]").remove()
    parent.parentNode.insertBefore(container, parent)
    container.append(parent)
    container.append(sidenote)

    link.addEventListener("mouseenter", () => {
      sidenote.classList.add("-highlighted")
    })

    link.addEventListener("mouseleave", () => {
      sidenote.classList.remove("-highlighted")
    })

    link.addEventListener("click", (e) => {
      e.preventDefault()
    })
  })

  if (footerFootnotes) {
    footerFootnotes.remove()
  }
}

export function setupImageCaptions() {
  const captions = document.querySelectorAll("p > img + em")
  captions.forEach((caption) => {
    const p = caption.parentElement
    const img = p.querySelector("img")
    const figure = document.createElement("figure")
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = caption.innerHTML
    img.title = caption.textContent
    figure.append(img)
    figure.append(figcaption)
    p.after(figure)
    p.remove()
  })
}

export function setupImageLinks() {
  const images = document.querySelectorAll("img:not([class])")
  images.forEach((image) => {
    const p = image.parentElement
    const link = document.createElement("a")
    link.href = image.src
    link.setAttribute(
      "data-lg-size",
      `${image.getAttribute("width")}-${image.getAttribute("height")}`
    )
    link.appendChild(image.cloneNode(true))
    image.parentNode.replaceChild(link, image)

    lightGallery(link, {
      startAnimationDuration: 300,
      download: false,
      counter: false,
      // container: link,
    })
  })
}

export default setupFootnotes
