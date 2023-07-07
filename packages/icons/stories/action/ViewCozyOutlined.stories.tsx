import type { Meta, StoryObj } from '@storybook/react';

import ViewCozyOutlined from '../../lib/action/ViewCozyOutlined';

const meta: Meta<typeof ViewCozyOutlined> = {
  component: ViewCozyOutlined,
  tags: ['autodocs'],
  title: 'action/ViewCozyOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewCozyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
