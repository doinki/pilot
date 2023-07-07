import type { Meta, StoryObj } from '@storybook/react';

import MenuOpenOutlined from '../../lib/navigation/MenuOpenOutlined';

const meta: Meta<typeof MenuOpenOutlined> = {
  component: MenuOpenOutlined,
  tags: ['autodocs'],
  title: 'navigation/MenuOpenOutlined',
};

export default meta;
type Story = StoryObj<typeof MenuOpenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
