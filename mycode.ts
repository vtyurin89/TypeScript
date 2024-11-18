enum QuestionStatus {
    published = 'published',
    draft = 'draft',
    deleted ='deleted'
}

async function getFaqs(req: {topicId: number, status: QuestionStatus}): Promise<{
        question: string,
        answer: string,
        tags: string[],
        likes: number,
        status: string
    }[]> {
    const res = await fetch('/faqs', {
       method: 'POST',
       body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}