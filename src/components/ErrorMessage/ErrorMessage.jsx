import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <div className={css.message}>Whoops, something went wrong! Try again!</div>
    </div>
  );
}