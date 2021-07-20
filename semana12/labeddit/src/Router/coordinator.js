export const goToLoginPage = (history) => {
    history.push("/")
}

export const goToFeedPage = (history) => {
    history.push("/feed")
}

export const goToPostPage = (history, setDetailPost) => {
    history.push(`/post`)
}

export const goToRegisterPage = (history) => {
    history.push("/cadastro")
}