import type { Meta, StoryObj } from '@storybook/react';

import AssessmentOutlined from '../../lib/action/AssessmentOutlined';

const meta: Meta<typeof AssessmentOutlined> = {
  component: AssessmentOutlined,
  tags: ['autodocs'],
  title: 'action/AssessmentOutlined',
};

export default meta;
type Story = StoryObj<typeof AssessmentOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
