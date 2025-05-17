// INICIADO SESSSÃO, PAREI NA IMPORTAÇÃO DAS IMAGENS GRANDES PARA O CENTRO DO COMPONENT MOBILE 
// ESTOU TRABALHANDO MOBILE FIRST


import icones from "../services/exportImages.js";

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="w-full flex flex-col items-center justify-center py-10 px-4 gap-8">
        <div id="titlesAndIcons" className="flex flex-col items-center gap-4">
            <h3 className="text-[36px] font-bold text-[#a97744] text-center">Diferenciais da Tiamate</h3>

            {/* icones */}
            <div className="flex gap-4 flex-wrap items-center justify-center">
                <img src={icones.iconeLucro} alt="iconeAmor" />
                <img src={icones.iconeEntrega} alt="iconeAmor" />
                <img src={icones.iconeQualidade} alt="iconeAmor" />
                <img src={icones.iconeFranquia} alt="iconeAmor" />
                <img src={icones.iconeMidia} alt="iconeAmor" />
                <img src={icones.iconeAmor} alt="iconeAmor" />                
            </div>
        </div>

        {/* imagem central */}
        <img src={icones.iconeLucro} alt="iconeLucro" className="w-[300px]" />
    </section>
  )
}
