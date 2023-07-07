import type { Meta, StoryObj } from '@storybook/react';

import MpOutlined from '../../lib/image/MpOutlined';

const meta: Meta<typeof MpOutlined> = {
  component: MpOutlined,
  tags: ['autodocs'],
  title: 'image/MpOutlined',
};

export default meta;
type Story = StoryObj<typeof MpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
