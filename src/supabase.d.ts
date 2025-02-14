export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      posts: {
        Row: {
          content: string | null
          id: string
          posted_at: string | null
          title: string | null
        }
        Insert: {
          content?: string | null
          id?: string
          posted_at?: string | null
          title?: string | null
        }
        Update: {
          content?: string | null
          id?: string
          posted_at?: string | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      status: "online" | "offline"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  realtime: {
    Tables: {
      messages: {
        Row: {
          event: string | null
          extension: string
          id: string
          inserted_at: string
          payload: Json | null
          private: boolean | null
          topic: string
          updated_at: string
        }
        Insert: {
          event?: string | null
          extension: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic: string
          updated_at?: string
        }
        Update: {
          event?: string | null
          extension?: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages_2024_12_23: {
        Row: {
          event: string | null
          extension: string
          id: string
          inserted_at: string
          payload: Json | null
          private: boolean | null
          topic: string
          updated_at: string
        }
        Insert: {
          event?: string | null
          extension: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic: string
          updated_at?: string
        }
        Update: {
          event?: string | null
          extension?: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages_2024_12_24: {
        Row: {
          event: string | null
          extension: string
          id: string
          inserted_at: string
          payload: Json | null
          private: boolean | null
          topic: string
          updated_at: string
        }
        Insert: {
          event?: string | null
          extension: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic: string
          updated_at?: string
        }
        Update: {
          event?: string | null
          extension?: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages_2024_12_25: {
        Row: {
          event: string | null
          extension: string
          id: string
          inserted_at: string
          payload: Json | null
          private: boolean | null
          topic: string
          updated_at: string
        }
        Insert: {
          event?: string | null
          extension: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic: string
          updated_at?: string
        }
        Update: {
          event?: string | null
          extension?: string
          id?: string
          inserted_at?: string
          payload?: Json | null
          private?: boolean | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      schema_migrations: {
        Row: {
          inserted_at: string | null
          version: number
        }
        Insert: {
          inserted_at?: string | null
          version: number
        }
        Update: {
          inserted_at?: string | null
          version?: number
        }
        Relationships: []
      }
      subscription: {
        Row: {
          claims: Json
          claims_role: unknown
          created_at: string
          entity: unknown
          filters: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id: number
          subscription_id: string
        }
        Insert: {
          claims: Json
          claims_role?: unknown
          created_at?: string
          entity: unknown
          filters?: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id?: never
          subscription_id: string
        }
        Update: {
          claims?: Json
          claims_role?: unknown
          created_at?: string
          entity?: unknown
          filters?: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
          id?: never
          subscription_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      apply_rls: {
        Args: {
          wal: Json
          max_record_bytes?: number
        }
        Returns: Database["realtime"]["CompositeTypes"]["wal_rls"][]
      }
      broadcast_changes: {
        Args: {
          topic_name: string
          event_name: string
          operation: string
          table_name: string
          table_schema: string
          new: Record<string, unknown>
          old: Record<string, unknown>
          level?: string
        }
        Returns: undefined
      }
      build_prepared_statement_sql: {
        Args: {
          prepared_statement_name: string
          entity: unknown
          columns: Database["realtime"]["CompositeTypes"]["wal_column"][]
        }
        Returns: string
      }
      cast: {
        Args: {
          val: string
          type_: unknown
        }
        Returns: Json
      }
      check_equality_op: {
        Args: {
          op: Database["realtime"]["Enums"]["equality_op"]
          type_: unknown
          val_1: string
          val_2: string
        }
        Returns: boolean
      }
      is_visible_through_filters: {
        Args: {
          columns: Database["realtime"]["CompositeTypes"]["wal_column"][]
          filters: Database["realtime"]["CompositeTypes"]["user_defined_filter"][]
        }
        Returns: boolean
      }
      list_changes: {
        Args: {
          publication: unknown
          slot_name: unknown
          max_changes: number
          max_record_bytes: number
        }
        Returns: Database["realtime"]["CompositeTypes"]["wal_rls"][]
      }
      quote_wal2json: {
        Args: {
          entity: unknown
        }
        Returns: string
      }
      send: {
        Args: {
          payload: Json
          event: string
          topic: string
          private?: boolean
        }
        Returns: undefined
      }
      to_regrole: {
        Args: {
          role_name: string
        }
        Returns: unknown
      }
      topic: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      action: "INSERT" | "UPDATE" | "DELETE" | "TRUNCATE" | "ERROR"
      equality_op: "eq" | "neq" | "lt" | "lte" | "gt" | "gte" | "in"
    }
    CompositeTypes: {
      user_defined_filter: {
        column_name: string | null
        op: Database["realtime"]["Enums"]["equality_op"] | null
        value: string | null
      }
      wal_column: {
        name: string | null
        type_name: string | null
        type_oid: unknown | null
        value: Json | null
        is_pkey: boolean | null
        is_selectable: boolean | null
      }
      wal_rls: {
        wal: Json | null
        is_rls_enabled: boolean | null
        subscription_ids: string[] | null
        errors: string[] | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
