import type { Meta, StoryObj } from '@storybook/react';

import LayersOutlined from '../../lib/maps/LayersOutlined';

const meta: Meta<typeof LayersOutlined> = {
  component: LayersOutlined,
  tags: ['autodocs'],
  title: 'maps/LayersOutlined',
};

export default meta;
type Story = StoryObj<typeof LayersOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
