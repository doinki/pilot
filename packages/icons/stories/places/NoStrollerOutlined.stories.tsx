import type { Meta, StoryObj } from '@storybook/react';

import NoStrollerOutlined from '../../lib/places/NoStrollerOutlined';

const meta: Meta<typeof NoStrollerOutlined> = {
  component: NoStrollerOutlined,
  tags: ['autodocs'],
  title: 'places/NoStrollerOutlined',
};

export default meta;
type Story = StoryObj<typeof NoStrollerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
