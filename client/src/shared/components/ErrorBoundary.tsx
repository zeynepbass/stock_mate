
import {
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  Props,
  State
> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error: Error,
    errorInfo: ErrorInfo
  ) {
    console.error(
      "Uygulama hatası:",
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
          <div className="text-center">
            <h1 className="text-xl font-semibold text-slate-900">
            Bir şeyler ters gitti.
            </h1>

            <p className="mt-2 text-sm text-slate-500">
            Lütfen sayfayı yenileyip tekrar deneyin.
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
