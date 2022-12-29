import React, { ErrorInfo } from 'react'

export class ErrorBoundary extends React.Component<any, any> {
  state = { error: null }

  static getDerivedStateFromError(err: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { error: err }
  }

  componentDidCatch(err: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log({ err, errorInfo })
  }

  render() {
    if (this.state.error) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>
    }

    return this.props.children
  }
}