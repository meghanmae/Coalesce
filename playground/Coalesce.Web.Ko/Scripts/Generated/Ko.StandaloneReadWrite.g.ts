
/// <reference path="../coalesce.dependencies.d.ts" />

// Generated by IntelliTect.Coalesce

module ViewModels {
    
    export class StandaloneReadWrite extends Coalesce.BaseViewModel {
        public readonly modelName = "StandaloneReadWrite";
        public readonly primaryKeyName = "id";
        public readonly modelDisplayName = "Standalone Read Write";
        public readonly apiController = "/StandaloneReadWrite";
        public readonly viewController = "/StandaloneReadWrite";
        
        /** Configuration for all instances of StandaloneReadWrite. Can be overidden on each instance via instance.coalesceConfig. */
        public static coalesceConfig: Coalesce.ViewModelConfiguration<StandaloneReadWrite>
            = new Coalesce.ViewModelConfiguration<StandaloneReadWrite>(Coalesce.GlobalConfiguration.viewModel);
        
        /** Configuration for the current StandaloneReadWrite instance. */
        public coalesceConfig: Coalesce.ViewModelConfiguration<this>
            = new Coalesce.ViewModelConfiguration<StandaloneReadWrite>(StandaloneReadWrite.coalesceConfig);
        
        /** The namespace containing all possible values of this.dataSource. */
        public dataSources: typeof ListViewModels.StandaloneReadWriteDataSources = ListViewModels.StandaloneReadWriteDataSources;
        
        
        public id: KnockoutObservable<number | null> = ko.observable(null);
        public name: KnockoutObservable<string | null> = ko.observable(null);
        public date: KnockoutObservable<moment.Moment | null> = ko.observable(moment());
        
        
        
        
        
        
        
        
        /** 
            Load the ViewModel object from the DTO.
            @param data: The incoming data object to load.
            @param force: Will override the check against isLoading that is done to prevent recursion. False is default.
            @param allowCollectionDeletes: Set true when entire collections are loaded. True is the default. 
            In some cases only a partial collection is returned, set to false to only add/update collections.
        */
        public loadFromDto = (data: any, force: boolean = false, allowCollectionDeletes: boolean = true): void => {
            if (!data || (!force && this.isLoading())) return;
            this.isLoading(true);
            // Set the ID 
            this.myId = data.id;
            this.id(data.id);
            // Load the lists of other objects
            
            // The rest of the objects are loaded now.
            this.name(data.name);
            if (data.date == null) this.date(null);
            else if (this.date() == null || this.date()!.valueOf() != new Date(data.date).getTime()){
                this.date(moment(new Date(data.date)));
            }
            if (this.coalesceConfig.onLoadFromDto()){
                this.coalesceConfig.onLoadFromDto()(this as any);
            }
            this.isLoading(false);
            this.isDirty(false);
            if (this.coalesceConfig.validateOnLoadFromDto()) this.validate();
        };
        
        /** Saves this object into a data transfer object to send to the server. */
        public saveToDto = (): any => {
            var dto: any = {};
            dto.id = this.id();
            
            dto.name = this.name();
            if (!this.date()) dto.date = null;
            else dto.date = this.date()!.format('YYYY-MM-DDTHH:mm:ss.SSSZZ');
            
            return dto;
        }
        
        /** 
            Loads any child objects that have an ID set, but not the full object.
            This is useful when creating an object that has a parent object and the ID is set on the new child.
        */
        public loadChildren = (callback?: () => void): void => {
            var loadingCount = 0;
            if (loadingCount == 0 && typeof(callback) == "function") { callback(); }
        };
        
        public setupValidation(): void {
            if (this.errors !== null) return;
            this.errors = ko.validation.group([
                this.name.extend({ required: {params: true, message: "Name is required."} }),
                this.date.extend({ moment: { unix: true } }),
            ]);
            this.warnings = ko.validation.group([
            ]);
        }
        
        constructor(newItem?: object, parent?: Coalesce.BaseViewModel | ListViewModels.StandaloneReadWriteList) {
            super(parent);
            this.baseInitialize();
            const self = this;
            
            
            
            
            
            
            self.name.subscribe(self.autoSave);
            self.date.subscribe(self.autoSave);
            
            if (newItem) {
                self.loadFromDto(newItem, true);
            }
        }
    }
    
    export namespace StandaloneReadWrite {
    }
}
