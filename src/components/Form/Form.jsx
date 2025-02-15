export default function Form({ onClose }) {
    return (
      <div className="modal-form">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form className="form"> {/* Добавили класс form */}
          <div>
            <label htmlFor="email" className="label">Email:</label>
            <input id="email" type="email" className="input" required />
            <label htmlFor="phone" className="label">Phone:</label>
            <input id="phone" type="tel" className="input" />
            <label htmlFor="message" className="label">Message:</label>
            <textarea id="message" className="textarea" required></textarea>
          </div>
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>
    );
  }
  
  
