export interface CriarPost {
    titulo: string;
    descricaoCurta: string;
    conteudo: string;
    urlImagemDestaque: string;
    slug: string;
    dataPublicacao: Date;
    autor: string;
    ehVisivel: boolean;
}