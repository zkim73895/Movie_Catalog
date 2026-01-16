const ErrorMessage = ({message}) => {
    return (
        <div className="err-msg">
            <h3>Ошибка загрузки</h3>
            <p>
                    {message || "Не удалось загрузить данные. Попробуйте перезагрузить страницу."}
            </p>
        </div>
    )
}

export default ErrorMessage