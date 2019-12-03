import apiBase from '../apiBase';

export const getTest = (id: string) =>  apiBase.get<Models.Test>(`$test/${id}`);
