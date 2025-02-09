export default function Form({ onClose }) {
    return (
      <div className="modal-form">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form className="form"> {/* Добавили класс form */}
          <div>
            <label htmlFor="email" className="label">Email:</label> {/* Добавили класс label */}
            <input id="email" type="email" className="input" required /> {/* Добавили класс input */}
            <label htmlFor="phone" className="label">Phone:</label> {/* Добавили класс label */}
            <input id="phone" type="tel" className="input" /> {/* Добавили класс input */}
            <label htmlFor="message" className="label">Message:</label> {/* Добавили класс label */}
            <textarea id="message" className="textarea" required></textarea> {/* Добавили класс textarea */}
          </div>
          <button type="submit" className="submit-button">Отправить</button> {/* Добавили класс submit-button */}
        </form>
      </div>
    );
  }
  
  