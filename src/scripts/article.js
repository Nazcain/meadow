import { inter } from "@scripts/fontObserver"
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
    container.classList.add("sidenote-container")
    sidenote.classList.add("sidenote")
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

  if (window.innerWidth >= 768) {
    inter.load().then(() => {
      repositionSidenotes()
    })

    window.addEventListener(
      "resize",
      debounce((e) => {
        repositionSidenotes()
      })
    )
  }
}

function repositionSidenotes() {
  const sidenotes = document.querySelectorAll(".sidenote")

  for (let i = 1; i < sidenotes.length; i++) {
    const sidenote = sidenotes[i]
    sidenote.style.top = 0

    setTimeout(() => {
      const prevSidenote = sidenotes[i - 1]
      const rect = sidenote.getBoundingClientRect()
      const prevRect = prevSidenote.getBoundingClientRect()
      const offsetTop = rect.top + window.scrollY
      const prevOffsetTop = prevRect.top + window.scrollY
      const minMargin = 20
      const overlap = prevOffsetTop + prevRect.height + minMargin - offsetTop

      if (overlap > 0) {
        sidenote.style.top = `${overlap}px`
      }
    }, 1)
  }
}

function debounce(func) {
  let timer
  return function (event) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, 100, event)
  }
}

export function setupImageCaptions() {
  const captions = document.querySelectorAll("p > img + em, p > video + em")
  captions.forEach((caption) => {
    const p = caption.parentElement
    const img = p.querySelector("img")
    const video = p.querySelector("video")
    const figure = document.createElement("figure")
    const figcaption = document.createElement("figcaption")
    figcaption.innerHTML = caption.innerHTML
    if (img) {
      img.title = caption.textContent
      figure.append(img)
    }
    if (video) {
      figure.append(video)
    }
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
