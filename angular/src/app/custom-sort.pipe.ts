import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'customSort',
})
export class CustomSortPipe implements PipeTransform {
  private compare(a: any, b: any): number {
    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b)
    } else if (typeof a === 'number' && typeof b === 'number') {
      return a - b
    } else if (a instanceof Date && b instanceof Date) {
      return a.getTime() - b.getTime()
    } else {
      throw new Error('Unsupported type')
    }
  }

  transform<T extends { [k: string]: any }>(
    value: T[],
    criteria:
      | `${string & keyof T}`
      | `-${string & keyof T}`
      | (`${string & keyof T}` | `-${string & keyof T}`)[]
  ): T[] {
    const sortingCriterias = Array.isArray(criteria) ? criteria : [criteria]

    return value.sort((a, b) => {
      for (const sortingCriteria of sortingCriterias) {
        const order = sortingCriteria[0] === '-' ? -1 : 1
        const key = order === 1 ? sortingCriteria : sortingCriteria.substring(1)

        const result = order * this.compare(a[key], b[key])
        if (result !== 0) {
          return result
        }
      }
      return 0
    })
  }
}
