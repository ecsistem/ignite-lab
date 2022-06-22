import { CheckCircle, Lock } from "phosphor-react";
import { LessonProps } from "./../../interface/lesson";
import { format, isPast} from "date-fns";
import { ptBR } from "date-fns/locale";

export function CardLessons(props: LessonProps) {
  const isLessonAvaible = isPast(props.availableAt);
  const AvaibleDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' de 'Y' • 'k'h'mm", {
    locale:ptBR,
  })
  return (
    <a className="" href="#">
      <span className="text-gray-300">{AvaibleDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4">
        <header className="flex items-center justify-between">
          {isLessonAvaible ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className="text-xs text-white border  border-green-500 rounded py-[2px] px-2 font-bold">
            {props.lessonType == "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
