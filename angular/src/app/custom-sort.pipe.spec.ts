import { CustomSortPipe } from './custom-sort.pipe'

describe('CustomSortPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomSortPipe()
    expect(pipe).toBeTruthy()
  })

  it('works with single value', () => {
    const pipe = new CustomSortPipe()
    const items = [
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 1, name: 'a', data: new Date('2019-01-01') },
      { id: 3, name: 'c', data: new Date('2019-01-03') },
    ]

    expect(pipe.transform(items, 'id')).toEqual([
      { id: 1, name: 'a', data: new Date('2019-01-01') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 3, name: 'c', data: new Date('2019-01-03') },
    ])

    expect(pipe.transform(items, '-id')).toEqual([
      { id: 3, name: 'c', data: new Date('2019-01-03') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 1, name: 'a', data: new Date('2019-01-01') },
    ])

    expect(pipe.transform(items, 'name')).toEqual([
      { id: 1, name: 'a', data: new Date('2019-01-01') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 3, name: 'c', data: new Date('2019-01-03') },
    ])

    expect(pipe.transform(items, '-name')).toEqual([
      { id: 3, name: 'c', data: new Date('2019-01-03') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 1, name: 'a', data: new Date('2019-01-01') },
    ])

    expect(pipe.transform(items, 'data')).toEqual([
      { id: 1, name: 'a', data: new Date('2019-01-01') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 3, name: 'c', data: new Date('2019-01-03') },
    ])

    expect(pipe.transform(items, '-data')).toEqual([
      { id: 3, name: 'c', data: new Date('2019-01-03') },
      { id: 2, name: 'b', data: new Date('2019-01-02') },
      { id: 1, name: 'a', data: new Date('2019-01-01') },
    ])
  })

  it('works with multiple values', () => {
    const pipe = new CustomSortPipe()
    const items = [
      { name: 'fred', age: 48 },
      { name: 'barney', age: 36 },
      { name: 'fred', age: 40 },
      { name: 'barney', age: 34 },
    ]

    expect(pipe.transform(items, ['name', '-age'])).toEqual([
      { name: 'barney', age: 36 },
      { name: 'barney', age: 34 },
      { name: 'fred', age: 48 },
      { name: 'fred', age: 40 },
    ])
  })
})
