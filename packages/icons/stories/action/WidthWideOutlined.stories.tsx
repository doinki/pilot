import type { Meta, StoryObj } from '@storybook/react';

import WidthWideOutlined from '../../lib/action/WidthWideOutlined';

const meta: Meta<typeof WidthWideOutlined> = {
  component: WidthWideOutlined,
  tags: ['autodocs'],
  title: 'action/WidthWideOutlined',
};

export default meta;
type Story = StoryObj<typeof WidthWideOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
