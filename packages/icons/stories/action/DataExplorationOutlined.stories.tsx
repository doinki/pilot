import type { Meta, StoryObj } from '@storybook/react';

import DataExplorationOutlined from '../../lib/action/DataExplorationOutlined';

const meta: Meta<typeof DataExplorationOutlined> = {
  component: DataExplorationOutlined,
  tags: ['autodocs'],
  title: 'action/DataExplorationOutlined',
};

export default meta;
type Story = StoryObj<typeof DataExplorationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
