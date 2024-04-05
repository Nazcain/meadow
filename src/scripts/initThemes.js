function setTheme(themeName, storage) {
  document.documentElement.className = `theme-${themeName}`

  if (storage) {
    localStorage.setItem("theme", themeName)
  }
}

function checkTheme() {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      localStorage.removeItem("theme")
      if (matches) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    })

  const savedTheme = localStorage.getItem("theme")

  if (savedTheme) {
    if (savedTheme === "dark") {
      setTheme("dark")
    }

    if (savedTheme === "light") {
      setTheme("light")
    }
    return
  }

  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
  if (prefersDarkTheme.matches) {
    setTheme("dark")
    return
  }

  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)")
  if (prefersLightTheme.matches) {
    setTheme("light")
    return
  }

  setTheme("light")
}

function initThemeSwitcher() {
  const options = document.querySelectorAll("[data-theme-switcher]")
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.dataset.themeSwitcher
      setTheme(value, true)
    })
  })
}

function initThemes() {
  checkTheme()
  initThemeSwitcher()
}

export default initThemes
