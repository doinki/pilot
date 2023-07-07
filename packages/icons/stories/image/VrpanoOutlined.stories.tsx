import type { Meta, StoryObj } from '@storybook/react';

import VrpanoOutlined from '../../lib/image/VrpanoOutlined';

const meta: Meta<typeof VrpanoOutlined> = {
  component: VrpanoOutlined,
  tags: ['autodocs'],
  title: 'image/VrpanoOutlined',
};

export default meta;
type Story = StoryObj<typeof VrpanoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
