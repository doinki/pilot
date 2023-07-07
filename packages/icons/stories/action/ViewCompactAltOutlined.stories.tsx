import type { Meta, StoryObj } from '@storybook/react';

import ViewCompactAltOutlined from '../../lib/action/ViewCompactAltOutlined';

const meta: Meta<typeof ViewCompactAltOutlined> = {
  component: ViewCompactAltOutlined,
  tags: ['autodocs'],
  title: 'action/ViewCompactAltOutlined',
};

export default meta;
type Story = StoryObj<typeof ViewCompactAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
