import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  ,  standalone: true

})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    debugger;  
    if (items.length > 0 && searchText) {  
        if (searchText === "") return items;  
        searchText = searchText.toLowerCase();  
        return items.filter(ele => {  
            const titleMatch = ele.title && ele.title.toLowerCase().includes(searchText);  
            const descriptionMatch = ele.description && ele.description.toLowerCase().includes(searchText);  
            return titleMatch || descriptionMatch;  
        });  
    } else {  
        return items;  
    }  
}
}