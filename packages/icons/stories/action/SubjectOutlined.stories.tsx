import type { Meta, StoryObj } from '@storybook/react';

import SubjectOutlined from '../../lib/action/SubjectOutlined';

const meta: Meta<typeof SubjectOutlined> = {
  component: SubjectOutlined,
  tags: ['autodocs'],
  title: 'action/SubjectOutlined',
};

export default meta;
type Story = StoryObj<typeof SubjectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
