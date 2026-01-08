interface Prop{
    text: string,
    iconUrl: string,
    alt: string,
    style?: string,
}



const ContactItem = ({text, iconUrl, alt, style=""}:Prop) => {
  return (
    <div className={`flex items-start gap-5 ${style}`}>
        <img className="mt-1.5" src={iconUrl} alt={alt} />
         <p>{text} </p>
    </div>
  )
}

export default ContactItem