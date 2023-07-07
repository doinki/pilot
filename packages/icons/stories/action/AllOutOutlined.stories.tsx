import type { Meta, StoryObj } from '@storybook/react';

import AllOutOutlined from '../../lib/action/AllOutOutlined';

const meta: Meta<typeof AllOutOutlined> = {
  component: AllOutOutlined,
  tags: ['autodocs'],
  title: 'action/AllOutOutlined',
};

export default meta;
type Story = StoryObj<typeof AllOutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
