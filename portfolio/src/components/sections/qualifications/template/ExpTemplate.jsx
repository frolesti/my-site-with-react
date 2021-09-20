export default function ExpTemplate(props) {
    return (
        <div>
          <h3 class="qualification__title">{props.title}</h3>
          <span class="qualification__subtitle">{props.school}</span>
          <div class="qualification__calendar">
            <i class="uil ul-calendar-alt"></i>
            {props.year}
          </div>
        </div>
    )
}
