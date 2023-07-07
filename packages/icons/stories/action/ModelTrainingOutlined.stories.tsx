import type { Meta, StoryObj } from '@storybook/react';

import ModelTrainingOutlined from '../../lib/action/ModelTrainingOutlined';

const meta: Meta<typeof ModelTrainingOutlined> = {
  component: ModelTrainingOutlined,
  tags: ['autodocs'],
  title: 'action/ModelTrainingOutlined',
};

export default meta;
type Story = StoryObj<typeof ModelTrainingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
