
/// <reference path="../coalesce.dependencies.d.ts" />

// Generated by IntelliTect.Coalesce

module ListViewModels {
    
    export namespace CaseDtoStandaloneDataSources {
        export class Default extends Coalesce.DataSource<ViewModels.CaseDtoStandalone> { }
    }
    
    export class CaseDtoStandaloneList extends Coalesce.BaseListViewModel<ViewModels.CaseDtoStandalone> {
        public readonly modelName: string = "CaseDtoStandalone";
        public readonly apiController: string = "/CaseDtoStandalone";
        public modelKeyName: string = "caseId";
        public itemClass: new () => ViewModels.CaseDtoStandalone = ViewModels.CaseDtoStandalone;
        
        public filter: {
            caseKey?: string;
            title?: string;
            description?: string;
            openedAt?: string;
            assignedToId?: string;
            reportedById?: string;
            attachmentSize?: string;
            attachmentName?: string;
            attachmentType?: string;
            severity?: string;
            status?: string;
            devTeamAssignedId?: string;
        } | null = null;
        
        /** The namespace containing all possible values of this.dataSource. */
        public dataSources: typeof CaseDtoStandaloneDataSources = CaseDtoStandaloneDataSources;
        
        /** The data source on the server to use when retrieving objects. Valid values are in this.dataSources. */
        public dataSource: Coalesce.DataSource<ViewModels.CaseDtoStandalone> = new this.dataSources.Default();
        
        /** Configuration for all instances of CaseDtoStandaloneList. Can be overidden on each instance via instance.coalesceConfig. */
        public static coalesceConfig = new Coalesce.ListViewModelConfiguration<CaseDtoStandaloneList, ViewModels.CaseDtoStandalone>(Coalesce.GlobalConfiguration.listViewModel);
        
        /** Configuration for this CaseDtoStandaloneList instance. */
        public coalesceConfig: Coalesce.ListViewModelConfiguration<CaseDtoStandaloneList, ViewModels.CaseDtoStandalone>
            = new Coalesce.ListViewModelConfiguration<CaseDtoStandaloneList, ViewModels.CaseDtoStandalone>(CaseDtoStandaloneList.coalesceConfig);
        
        
        protected createItem = (newItem?: any, parent?: any) => new ViewModels.CaseDtoStandalone(newItem, parent);
        
        constructor() {
            super();
        }
    }
}