<?php
namespace Sonsor\Inpsyde\Interfaces;

interface IPlugin
{
    /**
     * @param string $hook
     * @param $func
     */
    public function action(string $hook, $func): void;

    /**
     * @param string $template
     * @return string
     */
    public function getTemplate( string $template ): string;

    /**
     *
     */
    public function init(): void;

    /**
     * @param array $variables
     * @return array
     */
    public function variables( array $variables): array;

    /**
     * @param string $template
     * @return string
     */
    public function template( string $template ): string;

    /**
     *
     */
    public function hook(): void;
}