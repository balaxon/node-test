import { GetWinners, SmallCar, UpdateWinner, Winners } from './interfaces';

enum Links {
  server = 'http://localhost:3000',
  garage = 'http://localhost:3000/garage',
  engine = 'http://localhost:3000/engine',
  winners = 'http://localhost:3000/winners',
}

enum Method {
  post = 'POST',
  put = 'PUT',
  get = 'GET',
  delete = 'DELETE',
  patch = 'PATCH',
}

enum Arguments {
  limit = 10,
}

enum Status {
  ok = 200,
  start = 'started',
  stop = 'stopped',
  drive = 'drive',
}

export class GetData {

  async getCars() {
    return (await fetch(`${Links.garage}`)).json();
  }

  async getCar(id: number) {
    return (await fetch(`${Links.garage}/${id}`)).json();
  }

  async createCar(body: SmallCar) {
    (
      await fetch(`${Links.garage}`, {
        method: Method.post,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number) {
    (await fetch(`${Links.garage}/${id}`, { method: Method.delete })).json();
  }

  async updateCar(id: number, body: SmallCar) {
    (
      await fetch(`${Links.garage}/${id}`, {
        method: Method.put,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async startEngine(id: number) {
    return (await fetch(`${Links.engine}?id=${id}&status=${Status.start}`, { method: Method.patch })).json();
  }

  async stopEngine(id: number) {
    return (await fetch(`${Links.engine}?id=${id}&status=${Status.stop}`, { method: Method.patch })).json();
  }

  async drive(id: number, signal: AbortSignal) {
    const res = await fetch(`${Links.engine}?id=${id}&status=${Status.drive}`, { method: Method.patch, signal }).catch();
    return res.status !== Status.ok ? { success: false } : { success: true };
  }

  async stopDrive(id: number) {
    const res = await fetch(`${Links.engine}?id=${id}&status=${Status.stop}`, { method: Method.patch }).catch();
    return res.status !== Status.ok ? { success: false } : { ...(await res.json()) };
  }

  getSortOrder(sort?: string, order?: string) {
    let res = '';
    if (sort && order) {
      res = `&_sort=${sort}&_order=${order}`;
    } else {
      res = '';
    }
    return res;
  }

  async getWinners({ page, limit = Arguments.limit, sort, order }: GetWinners) {
    return (await fetch(`${Links.winners}?_page=${page}&_limit=${limit}${this.getSortOrder(sort, order)}`)).json();
  }

  async getWinnersCount() {
    return (await fetch(`${Links.winners}`)).json();
  }

  async getWinner(id: number) {
    return (await fetch(`${Links.winners}/${id}`)).json();
  }

  async deleteWinner(id: number) {
    (await fetch(`${Links.winners}/${id}`, { method: Method.delete })).json();
  }

  async createWinner(body: Winners) {
    (
      await fetch(`${Links.winners}`, {
        method: Method.post,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async updateWinner(id: number, body: UpdateWinner) {
    (
      await fetch(`${Links.winners}/${id}`, {
        method: Method.put,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

}
