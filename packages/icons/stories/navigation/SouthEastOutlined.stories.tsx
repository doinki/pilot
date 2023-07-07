import type { Meta, StoryObj } from '@storybook/react';

import SouthEastOutlined from '../../lib/navigation/SouthEastOutlined';

const meta: Meta<typeof SouthEastOutlined> = {
  component: SouthEastOutlined,
  tags: ['autodocs'],
  title: 'navigation/SouthEastOutlined',
};

export default meta;
type Story = StoryObj<typeof SouthEastOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
