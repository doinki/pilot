import type { Meta, StoryObj } from '@storybook/react';

import LayersClearOutlined from '../../lib/maps/LayersClearOutlined';

const meta: Meta<typeof LayersClearOutlined> = {
  component: LayersClearOutlined,
  tags: ['autodocs'],
  title: 'maps/LayersClearOutlined',
};

export default meta;
type Story = StoryObj<typeof LayersClearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
