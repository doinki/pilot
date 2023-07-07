import type { Meta, StoryObj } from '@storybook/react';

import NoBackpackOutlined from '../../lib/places/NoBackpackOutlined';

const meta: Meta<typeof NoBackpackOutlined> = {
  component: NoBackpackOutlined,
  tags: ['autodocs'],
  title: 'places/NoBackpackOutlined',
};

export default meta;
type Story = StoryObj<typeof NoBackpackOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
