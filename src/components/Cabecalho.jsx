export default function Cabecalho({total, concluidas}) {
    const pendentes = total - concluidas
    return (
        <header className="cabecalho">
            <h1 className="cabecalho__titulo">Minhas Tarefas</h1>
            <div className="cabecalho__estadistcas">
                <span className ="cabecalho__estadistica">
                    <strong> {total} </strong> no total
                </span>
                <span className="cabecalho__ponto" arial-hidden="true">•</span>
                <span className="cabecalho__estadistica">
                    <strong> {pendentes} </strong> pendente{pendentes !== 1 ? 's' : ''}
                </span>
                <span className="cabecalho__ponto" arial-hidden="true">•</span>
                <span className="cabecalho__estadistica">
                    <strong> {concluidas} </strong> concluída{concluidas !== 1 ? 's' : ''}
                </span>
            </div>
        </header>
    )
}