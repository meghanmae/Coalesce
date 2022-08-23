
/// <reference path="../coalesce.dependencies.d.ts" />

// Generated by IntelliTect.Coalesce

module ViewModels {
    
    /** External Type PersonStats */
    export class PersonStats {
        public parent: any;
        public parentCollection: any;
        
        // Observables
        public height: KnockoutObservable<number | null> = ko.observable(null);
        public weight: KnockoutObservable<number | null> = ko.observable(null);
        public name: KnockoutObservable<string | null> = ko.observable(null);
        public nullableValueTypeCollection: KnockoutObservableArray<moment.Moment> = ko.observableArray([]);
        public valueTypeCollection: KnockoutObservableArray<moment.Moment> = ko.observableArray([]);
        
        /** 
            Load the object from the DTO.
            @param data: The incoming data object to load.
        */
        public loadFromDto = (data: any) => {
            if (!data) return;
            
            // Load the properties.
            this.height(data.height);
            this.weight(data.weight);
            this.name(data.name);
            this.nullableValueTypeCollection(data.nullableValueTypeCollection);
            this.valueTypeCollection(data.valueTypeCollection);
            
        };
        
        /** Saves this object into a data transfer object to send to the server. */
        public saveToDto = (): any => {
            var dto: any = {};
            
            dto.height = this.height();
            dto.weight = this.weight();
            dto.name = this.name();
            dto.nullableValueTypeCollection = this.nullableValueTypeCollection();
            dto.valueTypeCollection = this.valueTypeCollection();
            
            return dto;
        }
        
        constructor(newItem?: any, parent?: any) {
            this.parent = parent;
            
            if (newItem) {
                this.loadFromDto(newItem);
            }
        }
    }
}