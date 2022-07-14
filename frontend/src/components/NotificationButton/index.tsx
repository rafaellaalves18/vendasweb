import icon from '../../assets/img/icone-notificacao.svg' // importa a imagem para o botao 
import './styles.css' // importa o arquivo styles.css para o componente de botao 

// COMPONENTE DO BOTAO SMS
function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
