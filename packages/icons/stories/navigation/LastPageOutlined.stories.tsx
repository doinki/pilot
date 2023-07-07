import type { Meta, StoryObj } from '@storybook/react';

import LastPageOutlined from '../../lib/navigation/LastPageOutlined';

const meta: Meta<typeof LastPageOutlined> = {
  component: LastPageOutlined,
  tags: ['autodocs'],
  title: 'navigation/LastPageOutlined',
};

export default meta;
type Story = StoryObj<typeof LastPageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
