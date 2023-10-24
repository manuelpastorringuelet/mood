const createURL = (path: string) => {
  return window.location.origin + path
}

const sendRequest = async (url: string, method: string, body?: any) => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const res = await fetch(new Request(url, options))

  if (res.ok) {
    const data = await res.json()
    return data.data
  }

  return null
}

export const updateEntry = async (id: string, content: string) => {
  return sendRequest(createURL(`/api/journal/${id}`), 'PATCH', { content })
}

export const createNewEntry = async () => {
  return sendRequest(createURL('/api/journal'), 'POST')
}
