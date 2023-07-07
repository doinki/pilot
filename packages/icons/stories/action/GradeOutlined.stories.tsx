import type { Meta, StoryObj } from '@storybook/react';

import GradeOutlined from '../../lib/action/GradeOutlined';

const meta: Meta<typeof GradeOutlined> = {
  component: GradeOutlined,
  tags: ['autodocs'],
  title: 'action/GradeOutlined',
};

export default meta;
type Story = StoryObj<typeof GradeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
