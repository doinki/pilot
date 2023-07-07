import type { Meta, StoryObj } from '@storybook/react';

import UnsubscribeOutlined from '../../lib/communication/UnsubscribeOutlined';

const meta: Meta<typeof UnsubscribeOutlined> = {
  component: UnsubscribeOutlined,
  tags: ['autodocs'],
  title: 'communication/UnsubscribeOutlined',
};

export default meta;
type Story = StoryObj<typeof UnsubscribeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
