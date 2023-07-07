import type { Meta, StoryObj } from '@storybook/react';

import ExpandMoreOutlined from '../../lib/navigation/ExpandMoreOutlined';

const meta: Meta<typeof ExpandMoreOutlined> = {
  component: ExpandMoreOutlined,
  tags: ['autodocs'],
  title: 'navigation/ExpandMoreOutlined',
};

export default meta;
type Story = StoryObj<typeof ExpandMoreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
