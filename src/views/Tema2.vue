<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de creatividad
    p(data-aos="fade-down").mb-4
      span.b #[b Marín González (2010) ] 
      span expresa que la creatividad es un proceso que es dinámico, es un elemento de vital importancia para el ser humano; gracias a la creatividad la sociedad, las personas y las empresas han podido ir evolucionando para beneficio propio. 
    .row.justify-content-start.align-items-center.mb-4(data-aos="flip-down")
      .col-lg-2.up
        h4.title.text-center.p-2 Concepto
    .row.justify-content-center.align-items-center.mb-5  
      .col-lg-4
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img15.png', alt='')           
      .col-lg-8
        p(data-aos="fade-down") Se hace totalmente necesario trabajar la creatividad con el fin de obtener ideas de valor para las empresas de tal forma que puedan crear y modificar productos, e incluso procesos, con el fin de satisfacer necesidades. Pero para poderlo lograr se debe trabajar de forma planificada y estructurada.
        p(data-aos="fade-down") Para estimular la creatividad las empresas se pueden soportar en distintas técnicas que pueden ser de utilidad para encontrar soluciones creativas y diferentes que puedan aportarles valor. A continuación, se presentan una serie de técnicas de creatividad que pueden ser muy útiles para las PYME:

    .bg5.mb-5(data-aos="flip-down")
      SlyderE.pt-5(indicadores="derecha")
        .row.justify-content-center.align-items-center
          .col-lg-6
            h4 Técnica del #[i Brainstorming]
            p La tradicional lluvia de ideas que es la técnica más extendida. Es una técnica que se trabaja en equipo y que busca generar una gran cantidad de ideas en un tiempo específico que por lo general es de una hora. 

            p Los miembros del equipo aportan todas las ideas que van generando, para que, al final, de la cantidad total aportada, se pueden obtener ideas de calidad.  
          .col-lg-6
            img.img-a.img-t.my-3(src='@/assets/curso/temas/img16.png', alt='')         
        .row.justify-content-center.align-items-center
          .col-lg-6
            h4 Técnica del #[i Brainwriting]
            p Es una variante escrita del Brainstorming. Regularmente se emplea con grupos de personas que no se conocen, que tiene problemas de expresión o con equipos donde hay jerarquías evidentes que evitan a muchos de los presentes poder generar ideas ante la presencia de los directores. 

            p En esta técnica se usan varias hojas de papel en las que los participantes escriben y explican las ideas de manera anónima para luego ser compartidas al resto del equipo.
          .col-lg-6
            img.img-a.img-t.my-3(src='@/assets/curso/temas/img17.png', alt='')
        .row.justify-content-center.align-items-center
          .col-lg-6
            h4 Técnica de la Provocación
            p Este método radica en la creación de pensamientos ilógicos que lleven a la mente afuera de los pensamientos preestablecidos, pensamientos que luego serán analizados de una forma racional. 

            p Es por esto que se basa en la formulación de provocaciones, o sea, ideas que no tienen sentido, como, por ejemplo, que las vacas vuelan o que el oxígeno es de color morado. 
          .col-lg-6
            img.img-a.img-t.my-3(src='@/assets/curso/temas/img18.png', alt='')         
        .row.justify-content-center.align-items-center
          .col-lg-6
            h4 Técnica Listado de Atributos
            p R.P. Crawford fue quien ideó esta técnica, la cual es muy útil para lograr la mejoría productos existentes, y consiste en tres pasos: 

            p #[b Primero], se hace un listado de las características o atributos del producto que se desea mejorar. 

            p #[b Segundo], se analiza cada atributo y la forma de mejorarlo a través de la enunciación de algunas preguntas por parte del organizador. 

            p #[b Tercero], se seleccionan las mejores ideas para desarrollar una evaluación posterior.
          .col-lg-6
            img.img-a.img-t.my-3(src='@/assets/curso/temas/img19.png', alt='') 

    .bg6
      p(data-aos="fade-down").mb-5.pt-5
        span.b #[b Técnica SCAMPER: ] 
        span es otra técnica que sirve para la mejoría de productos o servicios existentes, pero a través de una mezcla de varias técnicas. Consiste en una lista de preguntas que invita a pensar nuevas alternativas:
      .row.justify-content-center.align-items-center
        .col-lg-12.up
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/img21.svg', alt='imagen infográfica')
            .tarjeta.color-acento-botones.p-3(x="21.5%" y="39.5%" numero="+")
              .text-center            
                h5 Sustituir 
                p Suplantar cosas, zonas, operaciones, personas, conceptos, funciones, horarios.
            .tarjeta.color-acento-botones.p-3(x="31%" y="39.5%" numero="+")
              .text-center            
                h5 Combinar 
                p Ajustar temas, percepciones, conceptos, emociones, funciones.
            .tarjeta.color-acento-botones.p-3(x="40.5%" y="50.7%" numero="+")
              .text-center            
                h5 Adaptar 
                p Adecuar conceptos de otros contextos, épocas, zonas, individuos.
            .tarjeta.color-acento-botones.p-3(x="50.8%" y="53%" numero="+")
              .text-center            
                h5 Modificar 
                p Sumar algo a un concepto o producto, para transformarlo.
            .tarjeta.color-acento-botones.p-3(x="58.3%" y="53%" numero="+")
              .text-center            
                h5 Proponer 
                p Plantear que el producto pueda ser usado de otras formas. Descubrir las posibilidades ocultas que pueden tener las cosas, de tal forma que se puedan lograr nuevas opciones de uso.
            .tarjeta.color-acento-botones.p-3(x="70%" y="54.5%" numero="+")
              .text-center            
                h5 Eliminar 
                p Excluir conceptos, fragmentos, elementos del problema, usos, tecnología.
            .tarjeta.color-acento-botones.p-3(x="78.3%" y="39.5%" numero="+")
              .text-center
                h5 Reordenar 
                p Invertir procesos, elementos, cambiarlos de lugar, hacer lo contrario, cambiar los roles.
    .bg7
      .row.justify-content-start.align-items-center.mb-4(data-aos="flip-down")
        .col-lg-3.up
          h4.title.text-center.p-2 Técnica de Mapas mentales
      .row.justify-content-center.align-items-center.mb-5        
        .col-lg-6
          p(data-aos="fade-down") Tony Buzan fue el creador de esta técnica gráfica, investigador en el campo de la inteligencia y presidente de la empresa <i>Brain Foundation</i>. Muy útil para la incubación de ideas por asociación y para ordenar la información. Para aplicarla describimos cuál es el centro el problema o el reto que se debe lograr, y de ahí se desprenden los temas concernientes a ese problema o reto generando así una estructura nodal. De esos temas pueden partir imágenes o palabras claves que son trazadas sobre líneas abiertas.
        .col-lg-6
          img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img23.png', alt='') 

      .row.justify-content-start.align-items-center.mb-4(data-aos="flip-down")
        .col-lg-4.up
          h4.title.text-center.p-2 Ojos limpios o técnica de <i>Moliere</i>
      .row.justify-content-start.align-items-center.mb-4        
        .col-auto.d-none.d-lg-block.p-0.ps-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img24.png', alt='')       
        .col-lg-10
          p(data-aos="fade-down").mb-0 Ayuda a establecer ideas creativas a través de una mente que no se encuentra condicionada y que pueda generar ideas nuevas, frescas y originales, cuyo aspecto sea distinto. Es una mirada que suele ayudar a salir del retraso provocado por el exceso de información o la implicación en un proceso. 

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img25.png', alt='')                
      .col-lg-8
        p(data-aos="fade-down") Por eso, se hace una invitación a personas que no tienen nada que ver con el problema, como por ejemplo niños, extranjeros, adultos mayores, personas de otra área dentro de la empresa, profesionales de otros campos, con la siguiente propuesta de intervención:         
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img26.svg', alt='')           

    .row.justify-content-start.align-items-center(data-aos="flip-down")
      .col-lg-2.up.mdown
        h4.title.text-center.p-2 Objetivos
    .bg8.p-5.rounded-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          p(data-aos="fade-down").mb-0 El uso de estas técnicas de creatividad no asegura el éxito, pero su finalidad es la de lograr objetivos cercanos a la creatividad, de tal manera que se permita direccionar el pensamiento en procesos concretos. Además, permite tener un orden determinado para el logro de una meta deseada por parte de un equipo de trabajo, ayudando a desarmar los caminos tradicionales o más comunes del pensamiento, con el fin de generar ideas o conceptos a través de formas diferentes que den valor en el proceso creativo.  
        .col-lg-4
          img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img27.png', alt='')  

    .row.justify-content-start.align-items-center.mb-4(data-aos="flip-down")
      .col-lg-4.up
        h4.title.text-center.p-2 Planteamiento estratégico táctico y operativo 

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-3
        img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img28.png', alt='')                
      .col-lg-9 
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img29.png', alt='')                
          .col-lg-8
            p Una práctica que comúnmente usan las empresas es la disposición de buzones (físicos o digitales) para la captura de ideas por parte de los empleados o colaboradores. En este caso, la empresa debe estar preparada para recibir una gran cantidad de propuestas y, además, de catalogarlas, tramitarlas y elegir las que verdaderamente estén alineadas con la estrategia de la empresa. 
        .bg9.p-3.mb-4
          p(data-aos="fade-down").mb-0 Una muy buena práctica radica en la alineación de la incubación de ideas con las oportunidades de la empresa, así como también con los problemas de los clientes. Para ello, se pueden establecer campañas de innovación al interior de la organización, definidas en el tiempo, en las cuales se pueda socializar una oportunidad específica.             
        p(data-aos="fade-down") Luego, se pueden buscar o generar espacios para la creación de ideas; se recomienda que estos espacios sean distintos a los usuales del trabajo con el fin de forjar una mejor estimulación de la creatividad. Para las reuniones de incubación de ideas se pueden invitar personas que conozcan la empresa y el problema, además de otros profesionales de áreas o procesos totalmente distintos. Suele suceder que estos últimos traerán puntos de vista frescos que sirven para inyectar nuevas dosis de creatividad al proceso, pues es normal que cuando se trabaja en un problema en el día a día se hayan intentado varias formas para solucionarlo y se llegue a un punto en el que sea difícil pensar diferente. 

    p(data-aos="fade-down").mb-4 El producto que se logra de estas sesiones es una muy buena cantidad de ideas (en este momento es más importante la cantidad que la calidad). Estas ideas pueden ser analizadas, clasificadas y agrupadas por un comité previamente instaurado. Por otro lado, el proceso del pensamiento creativo es un factor de suma importancia, por lo que a continuación se comparten algunas estrategias para su fomento:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        SlyderG(columnas="col-lg-12")(data-aos="fade-right")
          .crd.crd-white.crd--100.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img30.svg', alt='')                
              .col-lg-10
                .text-white
                  h5 La analogía
                  p Es la relación, semejanza o similitud que se puede establecer entre distintas cosas, pero que es ideal para el planteamiento de una transmisión de soluciones ante problemas determinados, sin embargo, si una analogía se establece de manera poco acertada, dará como resultado soluciones mediocres.     

          .crd.crd-white.crd--100.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img31.svg', alt='')                
              .col-lg-10
                .text-white
                  h5 La combinación o síntesis 
                  p Es una composición que es producto del análisis de cada uno de los elementos que conforman un todo. Es un proceso por el cual se transforman ciertos elementos en otros, pasando de ser simples a otros más complejos, después de suponer nuevas implementaciones a elementos ya inventados.

          .crd.crd-white.crd--100.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img32.svg', alt='')                
              .col-lg-10
                .text-white
                  h5 El pensamiento lateral 
                  p El psicólogo Edward de Bono es quien promueve esta estrategia la cual consiste en hacer una observación sobre las cosas de una manera poco habitual, apoyándose en ideas que se salen de lo tradicional con el fin de buscar nuevas alternativas para la resolución de problemas. La idea es dejar de lado el pensamiento lógico para lograr la estimulación del pensamiento de tal manera que puedan hallar las respectivas soluciones.

          .crd.crd-white.crd--100.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img33.svg', alt='')                
              .col-lg-10
                .text-white
                  h5 La lógica inversa  
                  p Se trata de observar las cosas al revés de como regularmente se encuentran. Es una estrategia que se usa principalmente para brindar nuevas ideas, especialmente a la hora de innovar productos, y donde el pensamiento al revés puede ser el acceso a lograr la creación de ideas nunca vistas.

          .crd.crd-white.crd--100.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img34.svg', alt='')                
              .col-lg-10
                .text-white
                  h5 Higiene mental
                  p Luego de pasar mucho tiempo creando soluciones para la resolución de un problema sin hallar lo que se quiere, llega el momento de tener un descanso que pueda relajar el pensamiento. El resultado puede ser sorprendente porque se puede tener una revitalización que suele dar como resultado la inspiración, entregando una cantidad de ideas en el momento más imprevisto.
  

</template>

<script>
import SlyderG from '../components/SlyderG.vue'
export default {
  name: 'Tema2',
  components: {
    SlyderG,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
