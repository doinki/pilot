import type { Meta, StoryObj } from '@storybook/react';

import GraphicEqOutlined from '../../lib/device/GraphicEqOutlined';

const meta: Meta<typeof GraphicEqOutlined> = {
  component: GraphicEqOutlined,
  tags: ['autodocs'],
  title: 'device/GraphicEqOutlined',
};

export default meta;
type Story = StoryObj<typeof GraphicEqOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
